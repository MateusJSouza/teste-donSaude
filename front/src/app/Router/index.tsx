import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ListPartners } from '../view/components/ListPartners'
import { PartnerFormAddress } from '../view/components/PartnerFormAddress'
import { PartnerFormInfo } from '../view/components/PartnerFormInfo'
import { PartnerLayout } from '../view/layouts/PartnerLayout'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PartnerLayout />}>
          <Route path="/" element={<ListPartners />} />
          <Route path="/new" element={<PartnerFormInfo />} />
          <Route path="/address" element={<PartnerFormAddress />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
