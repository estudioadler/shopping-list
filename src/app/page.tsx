import { SelectQuantity } from "@/components/SelectQuantity/SelectQuantity";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectCategory } from "@/components/ui/SelectCategory/SelectCategory";
import { useState } from "react";

interface Item {
  id: number;
  item: string;
  price: number;
  quantity: number;
  category: string;
}

const state = {
  listaDeCompras: [] as Item[], // Array para armazenar os itens
  novoItem: '' as string, // Input para o novo item
  novoPreco: 0 as number, // Input para o novo preço
  novaQuantidade: 0 as number, // Input para a nova quantidade
  novaCategoria: '' as string, // Input para a nova categoria
};


export default function Home() {
  const [item , setItem] = useState([]);
  const [price, setPrice] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [category, setCategory] = useState([]);

  const handleItemChange = (event: any) => {
    setItem(event.target.value);
  }

  const handlePriceChange = (event: any) => {
    setPrice(event.target.value);
  }

  const handleQuantityChange = (event: any) => {
    setQuantity(event.target.value);
  }

  const handleCategoryChange = (event: any) => {
    setCategory(event.target.value);
  }

  const handleAddItem = (event: any) => {
    // Adicionar o novo item ao array
    state.listaDeCompras.push({
      id: state.listaDeCompras.length + 1,
      item: item,
      price: price,
      quantity: quantity,
      category: category
    })

    // Limpar os inputs
    setItem('');
    setPrice(0);
    setQuantity(0);
    setCategory('');
  }

  return (
    <div className="flex flex-col space-y-4 container mx-auto">
      <h1 className="text-3xl font-bold">Lista de compras</h1>
      <form className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Item</Label>
          <Input id="name" placeholder="Nome do produto" 
            onChange={handleItemChange}
          />
        </div>
        <div className="grid grid-cols-3 items-center">
          <SelectQuantity onChange={handleQuantityChange} />
          <SelectCategory onChange={handleCategoryChange} />
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Preco</Label>
            <Input id="name" type="number" placeholder="R$ 0,00" />
          </div>
        </div>
        <Button variant="default" size={"lg"} onClick={handleAddItem}>
          Adicionar
        </Button>
      </form>
    </div>
  );
}
