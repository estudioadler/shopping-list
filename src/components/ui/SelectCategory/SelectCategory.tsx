import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectCategoryProps {
  options: string[];
  onChange: (value: string) => void;
}

export const SelectCategory = ({onChange}: SelectCategoryProps) => {
  const options = ["Grãos", "Legumes", "Frutas", "Cereais", "Doces", "Carnes",  "Laticinios", "Outros"];
  return (
    <div>
      <label htmlFor="category">Categoria</label>
      <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Selecione" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
    </div>
    
  );
};
