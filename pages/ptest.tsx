import { Box, Button } from '@chakra-ui/react'
import axios from 'axios'
import { useState, useCallback } from 'react';
import ImageUpload from '../src/components/ImageUpload'
import Navbar from "../src/components/Navbar"



// const uploadToServer = async (event) => {
//   const body = new FormData();
//   body.append("file", image);
//   const response = await fetch("/api/file", {
//     method: "POST",
//     body
//   });
// };

async function uploadResource(file: File) {
  const body = new FormData()
  body.append('image', file)
  const data = await axios.post('/api/resource/upload', body)
  return data.data
}


export default function Test() {
  const [ files, setFiles ] = useState<File[]>([])  

  const upload = useCallback(async () => {
    await Promise.all(files.map(file => {
      return uploadResource(file)
    }))
  }, [files])

  return <Box>
    <Navbar></Navbar>
    <Box pt="55">
      <Button onClick={upload}>upload</Button>

      <ImageUpload 
        onChange={setFiles}
        limit={6} />
    </Box>
  </Box>
}