import { useRouter } from 'next/router'
import SupplierCreate from '../create'

export default function SupplierUpdate(){
  const router = useRouter()

  const { id } = router.query

  return <SupplierCreate
    supplierId={Number(id)}
  />
}
