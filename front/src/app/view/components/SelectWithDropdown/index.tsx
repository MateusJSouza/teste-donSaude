import * as Input from '../Input'
import { Label } from '../Label'
import * as Select from '../Select'

export function SelectWithDropdown() {
  return (
    <div className="flex flex-col">
      <Label className="border-px flex flex-row">Telefone</Label>
      <div className="border-px flex rounded-xl border">
        <Select.Root name="category">
          <Select.Trigger className="w-min border-none bg-none py-2 pl-3">
            <Select.Value placeholder="BR" />
          </Select.Trigger>

          <Select.Content>
            <Select.Item value="category-1">
              <Select.ItemText>US</Select.ItemText>
            </Select.Item>

            <Select.Item value="category-2">
              <Select.ItemText>BR</Select.ItemText>
            </Select.Item>

            <Select.Item value="category-3">
              <Select.ItemText>UK</Select.ItemText>
            </Select.Item>

            <Select.Item value="category-4">
              <Select.ItemText>FR</Select.ItemText>
            </Select.Item>

            <Select.Item value="category-5">
              <Select.ItemText>DE</Select.ItemText>
            </Select.Item>
          </Select.Content>
        </Select.Root>

        <Input.Root className="border-none bg-none">
          <Input.Control placeholder="Placeholder" />
        </Input.Root>
      </div>
    </div>
  )
}
