import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ListPartners } from '../view/components/ListPartners'
import { PartnerFormAddress } from '../view/components/PartnerFormAddress'
import { PartnerFormInfo } from '../view/components/PartnerFormInfo'
import { ListPartnerLayout } from '../view/layouts/ListPartnerLayout'
import { PartnerLayoutForm } from '../view/layouts/PartnerLayoutForm'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ListPartnerLayout />}>
          <Route path="/" element={<ListPartners />} />
          <Route path="/new" element={<PartnerFormInfo />} />
          <Route path="/address" element={<PartnerFormAddress />} />

          <Route element={<PartnerLayoutForm />}>
            <Route path="/info" element={<PartnerFormInfo />} />
            <Route path="/address" element={<PartnerFormAddress />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
