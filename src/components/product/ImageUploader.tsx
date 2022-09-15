import { FormControl, FormErrorMessage, FormLabel, InputGroup } from "@chakra-ui/react";
import ImageUpload from "../ImageUpload"
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useMutation } from '@tanstack/react-query';
import axios from "axios";

const productImageUploaderState = atom<File[]>({
  key: 'productImageUploaderState',
  default: []
})

const imageUploaderInvalidState = atom<boolean>({
  key: 'imageUploaderInvalidState',
  default: false
})

async function uploadResource(file: File) {
  const body = new FormData()
  body.append('image', file)
  const data = await axios.post('/api/resource/upload', body)
  return data.data
}

export function useImageUploader(){
  const [ files, setFiles ] = useRecoilState(productImageUploaderState)
  const setInvalid = useSetRecoilState(imageUploaderInvalidState)

  const uploadMutate = useMutation(['uploadImageUploader'], async (): Promise<number[]> => {
    const hasil = await Promise.all(files.map(file => uploadResource(file)))
    setFiles([])
    return hasil
  }, {
    onSuccess: () => {
      setInvalid(false)
    },
    onError: () => {
      setInvalid(true)
      setFiles([])
    }
  })

  return {
    files,
    setFiles,
    uploadMutate
  }
}

export default function ImageUploader(){
  const [ , setFiles ]= useRecoilState(productImageUploaderState)
  const isInvalid = useRecoilValue(imageUploaderInvalidState)

  return <FormControl ml="2" mb="6" isInvalid={isInvalid}>
    <FormLabel>
      Images :
    </FormLabel>
    <InputGroup size="sm">
      <ImageUpload 
        onChange={setFiles}
        limit={4} />
    </InputGroup>
    <FormErrorMessage>
      Upload Image Error
    </FormErrorMessage>
  </FormControl>
}