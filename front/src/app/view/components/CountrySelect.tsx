import { ChangeEvent, useState } from 'react'

import { countries } from '../../utils/countries'

import * as Input from './Input'
import { Label } from './Label'
import * as Select from './Select'

type CountryCode = keyof typeof countries

export function CountrySelect() {
  const [value, setValue] = useState<CountryCode | undefined>(undefined)
  const [phoneNumber, setPhoneNumber] = useState('')

  function handleCountrySelected(value: string) {
    setValue(value as CountryCode)
  }

  function handlePhoneNumberChange(event: ChangeEvent<HTMLInputElement>) {
    setPhoneNumber(event.target.value)
  }

  return (
    <>
      <Select.Root
        name="country"
        value={value}
        onValueChange={handleCountrySelected}
      >
        <Select.Trigger>
          <Select.Value placeholder="Placeholder">{value}</Select.Value>
        </Select.Trigger>

        <Select.Content>
          {Object.entries(countries).map(([code, title]) => {
            return (
              <Select.Item key={code} value={code}>
                <Select.ItemText>{title}</Select.ItemText>
              </Select.Item>
            )
          })}
        </Select.Content>
      </Select.Root>

      <div className="flex flex-col">
        <Label>E-mail</Label>

        <Input.Root rounded>
          <Input.Control placeholder="Digite seu e-mail" />
        </Input.Root>
      </div>
    </>
  )
}
