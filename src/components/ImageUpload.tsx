import { Flex, Spacer, CloseButton, HStack, Center, Icon, Box } from "@chakra-ui/react"
import { useMemo, useEffect, useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { AiOutlineFileAdd } from "react-icons/ai"

function PreviewItem(prop: { file: File, onDelete: ()=>unknown }){
  const { file, onDelete } = prop
  const url = useMemo(() => {
    return URL.createObjectURL(file)
  }, [file])  

  useEffect(() => {
    
    return () => {
      URL.revokeObjectURL(url)
    }
  
  }, [url])

  console.log(url)

  return <Box
    rounded="md"
    boxSize="100"
    bgImg={url}
    bgSize="cover"
  >
    <Flex>
      <Spacer />
      <CloseButton color="red" size="sm" m="1" onClick={onDelete}/>
    </Flex>
    
  </Box>
}


export default function ImageUpload(prop: { limit: number}) {

  const { limit } = prop

  const [files, setFiles] = useState<File[]>([])
  const {getRootProps, getInputProps} = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: (accfile: File[]) => {
      setFiles(files => {
        return [...files, ...accfile]
      })
    }
  })
  
  const onDelete = useCallback((file: File) => {
    setFiles(files => {
      return [...files.filter(ff => ff != file)]
    })
  }, [setFiles])

  return (
    <HStack>
    {
      files.map((file, index) => {
        return <PreviewItem
          onDelete={() => onDelete(file)}
          key={index} 
          file={file} />
      })

    }
      { files.length < limit &&  

        <Center
          alignContent="center"
          rounded="md"
          boxSize="100"
          bgSize="cover"
          border='2px'
          borderColor='gray.200'
          borderStyle="dashed"

          {...getRootProps({className: 'dropzone'})}
        >
          <Icon as={AiOutlineFileAdd} boxSize="10" color='gray.200' />

          <input {...getInputProps()} />  
        </Center>


      }
      

    </HStack>
  );
}