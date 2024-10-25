import React from 'react'
import UploadDocuments from './kyc/UploadDocuments'
import AddressProof from './kyc/AddressProof'
import BankDetails from './kyc/BankDetails'

function Kyc() {
  return (
   <>
   <UploadDocuments />
   <hr />
   <AddressProof />
   <hr />
   <BankDetails />
   </>
  )
}

export default Kyc
