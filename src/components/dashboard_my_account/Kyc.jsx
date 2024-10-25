import React from 'react'
import UploadDocuments from './kyc/UploadDocuments'
import AddressProof from './kyc/AddressProof'
import BankDetails from './kyc/BankDetails'

function Kyc() {
  return (
   <>
   <div className=' md:w-[70%]'>

  
   <UploadDocuments />
   <hr />
   <AddressProof />
   <hr />
   <BankDetails />

   </div>
   </>
  )
}

export default Kyc
