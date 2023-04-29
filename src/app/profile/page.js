


import Category from "./Category"
import Header from "./userprofile"
import Destaque from "./Destaque"
import ProductosRecentes from "./ProdutosRecentes"
import SearchButton from "./searchButton"


export default function Profile() {
    return (
      <div>
        <Header />
        <Destaque />
        <ProductosRecentes />
        <SearchButton />
        <Category />
      </div>
    ) 
  }
  