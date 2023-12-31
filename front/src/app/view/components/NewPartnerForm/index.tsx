import { Link } from 'react-router-dom'

import { Button } from '../Button'
import * as Input from '../Input'
import { Label } from '../Label'
import * as Select from '../Select'
import { SelectWithDropdown } from '../SelectWithDropdown'

export function NewPartnerForm() {
  return (
    <form className="mt-6 font-inter">
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
        <div className="flex flex-col">
          <Label>Categoria</Label>

          <Select.Root name="category">
            <Select.Trigger>
              <Select.Value placeholder="Selecione uma categoria" />
            </Select.Trigger>

            <Select.Content>
              <Select.Item value="category-1">
                <Select.ItemText>Categoria 1</Select.ItemText>
              </Select.Item>

              <Select.Item value="category-2">
                <Select.ItemText>Categoria 2</Select.ItemText>
              </Select.Item>

              <Select.Item value="category-3">
                <Select.ItemText>Categoria 3</Select.ItemText>
              </Select.Item>
            </Select.Content>
          </Select.Root>
        </div>

        <div className="flex flex-col">
          <Label>CNPJ</Label>

          <Input.Root rounded>
            <Input.Control placeholder="Digite o CNPJ" />
          </Input.Root>
        </div>

        <div className="flex flex-col">
          <Label>Nome</Label>

          <Input.Root rounded>
            <Input.Control placeholder="Digite o nome completo" />
          </Input.Root>
        </div>

        <div className="flex flex-col">
          <Label>E-mail</Label>

          <Input.Root rounded>
            <Input.Control type="email" placeholder="Digite seu e-mail" />
          </Input.Root>
        </div>

        <SelectWithDropdown />
        <SelectWithDropdown />

        <div className="flex flex-col">
          <Label>Responsável Clínico</Label>
          <Input.Root rounded>
            <Input.Control placeholder="Digite o nome completo" />
          </Input.Root>
        </div>

        <div className="flex flex-col">
          <Label>Responsável Financeiro</Label>

          <Input.Root rounded>
            <Input.Control placeholder="Digite o nome completo" />
          </Input.Root>
        </div>

        <div className="flex flex-col">
          <Label>Senha</Label>

          <Input.Root rounded>
            <Input.Control type="password" placeholder="Digite sua senha" />
          </Input.Root>
        </div>

        <div className="flex flex-col">
          <Label>Confirme a senha</Label>

          <Input.Root rounded>
            <Input.Control
              type="password"
              placeholder="Digite novamente aqui"
            />
          </Input.Root>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-3 md:justify-end">
        <Button variant="ghost" className="px-10 py-2 md:px-20 md:py-[10px]">
          Cancelar
        </Button>
        <Link to="/partner/new/address">
          <Button className="px-10 py-2 md:px-20 md:py-[10px]">Próxima</Button>
        </Link>
      </div>
    </form>
  )
}
