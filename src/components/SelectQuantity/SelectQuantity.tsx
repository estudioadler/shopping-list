import React from 'react'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

interface SelectQuantityProps {
  onChange?: (value: string) => void
  value?: string
}

export const SelectQuantity = ({}: SelectQuantityProps) => {
  return (
    <div>
      <label htmlFor="quantity">Quantidade</label>
      <div className="grid grid-cols-2 items-center w-36 border rounded-md">
          <Input className="border-none" id="quantity" type="number" placeholder='0'
            onChange={() => {}}
          />
          <Select>
            <SelectTrigger className="bg-neutral-200">
              <SelectValue placeholder="un" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Unidade(s)</SelectItem>
              <SelectItem value="dark">Litro(s)</SelectItem>
              <SelectItem value="system">Quilo(s)</SelectItem>
            </SelectContent>
          </Select>
      </div>
    </div>
  )
}
