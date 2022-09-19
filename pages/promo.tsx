import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr, IconButton, Skeleton } from '@chakra-ui/react';
import { Promo } from '@prisma/client'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios'
import moment from 'moment';
import { AiOutlineDelete } from 'react-icons/ai'
import ConfirmModal from '../src/components/ConfirmModal';
import Navbar from "../src/components/Navbar"
import { PromoForm } from '../src/components/promo/PromoForm'
import { useConfirmModal } from '../src/components/ConfirmModal';
import { useAlert } from '../src/components/AlertNotif';
import { getPromoString } from '../src/helpers/formatter';

function dateFormatter(input: moment.MomentInput): string {
  return moment(input).format('DD MMMM YYYY, hh:mm')
}

// TODO: Unique name

export async function getPromoList(): Promise<Promo[]>{
  const res = await axios.get('/api/promo')
  return res.data
}


function TableItem(prop: { promo: Promo }) {
  const { promo } = prop
  const { id } = promo

  const client = useQueryClient()
  const setAlert = useAlert()

  const deletePromoMutation = useMutation(async () => {
    const res = await axios.delete(`/api/promo/${id}`)
    return res.data
  }, {
     onSuccess: () => {
        client.invalidateQueries(['promoList'])
        setAlert('success', 'Success', 'Delete Data Success')
     },
     onError: () => {
      setAlert('error', 'Error', 'Delete Promo Gagal')
     }
  })

  const deletePromo = useConfirmModal(deletePromoMutation, 'Delete Promo', 'Yakin Delete Promo ?', true)

  return <Tr>
  <Td>{promo.code}</Td>
  <Td isNumeric>{promo.used}</Td>
  <Td isNumeric>
    { getPromoString(promo) }
  </Td>
  <Td isNumeric> { promo.limit  ? promo.limit: 'Tidak Ada'  } </Td>
  <Td isNumeric>{ promo.start ? dateFormatter(promo.start): 'Tidak Ada' }</Td>
  <Td isNumeric>{ promo.end ? dateFormatter(promo.end): 'Tidak Ada' }</Td>
  <Td>{ promo.desc }</Td>
  <Td isNumeric>
  <IconButton
    onClick={deletePromo}
    color="red" variant="ghost" size="sm" aria-label='delete supplier' icon={<AiOutlineDelete />} />
  </Td>
</Tr>
}


export default function PromoPage() {
  
  const listQuery = useQuery(['promoList'], getPromoList)

  return <Box>
    <Navbar></Navbar>
    <Box pt="55">
    <PromoForm />

    <TableContainer p="6">
      <Table>
        <Thead bgColor="gray.400">
          <Tr>
            <Th>Code</Th>
            <Th isNumeric>Used</Th>
            <Th isNumeric>Discount</Th>
            <Th isNumeric>Limit</Th>
            <Th isNumeric>Start Date</Th>
            <Th isNumeric>End Date</Th>
            <Th>desc</Th>
            <Th>action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {/* bagian skeleton */}
          { listQuery.isLoading &&
            [ 0, 1, 2 ].map(i => {
              return <Tr key={i}>
                <Td><Skeleton>XXAS</Skeleton></Td>
                <Td isNumeric><Skeleton>20</Skeleton></Td>
                <Td isNumeric><Skeleton>12.000.000</Skeleton></Td>
                <Td isNumeric><Skeleton>100</Skeleton></Td>
                <Td isNumeric><Skeleton>12 agustus 2022</Skeleton></Td>
                <Td isNumeric><Skeleton>13 agustus 2022</Skeleton></Td>
                <Td><Skeleton>asdasd asdasdasd asdasdasd</Skeleton></Td>
                
                <Td isNumeric>
                  <Skeleton>
                  <IconButton
                    color="red" variant="ghost" size="sm" aria-label='delete supplier' icon={<AiOutlineDelete />} />
                  </Skeleton>
                </Td>
                
              </Tr>
            })
          }

          
          { listQuery.data &&
            listQuery.data.map((promo, index) => {
              return <TableItem
                key={index}
                promo={promo}
              ></TableItem>
            })
          }
          
        </Tbody>
      </Table>
    </TableContainer>
    </Box>
    <ConfirmModal />
  </Box>
}