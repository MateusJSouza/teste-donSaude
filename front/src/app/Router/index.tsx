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

          <Route element={<PartnerLayoutForm />}>
            <Route path="/partner/new/info" element={<PartnerFormInfo />} />
            <Route
              path="/partner/new/address"
              element={<PartnerFormAddress />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
