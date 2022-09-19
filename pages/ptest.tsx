import { Box, Button, useDisclosure } from '@chakra-ui/react'
import { Promo } from '@prisma/client';
import { useState } from 'react';
import Navbar from "../src/components/Navbar"
import PromoSearchModal from '../src/components/promo/PromoSearchModal';



// const uploadToServer = async (event) => {
//   const body = new FormData();
//   body.append("file", image);
//   const response = await fetch("/api/file", {
//     method: "POST",
//     body
//   });
// };




export default function Test() {
  const [promo, setPromo] = useState<Promo>()
  const {isOpen, onClose, onOpen } = useDisclosure()

  return <Box>
    <Navbar></Navbar>
    <Box pt="55">
      <Button colorScheme='teal' onClick={onOpen}>
        add promo
      </Button>
      <PromoSearchModal
        onOpen={onOpen}
        isOpen={isOpen}
        onClose={onClose}
        onSelect={setPromo}
      />
    </Box>
  </Box>
}