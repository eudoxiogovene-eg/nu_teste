import Image from 'next/image'
import { Inter } from 'next/font/google'
import Stories from '../../components/Home/stories'
import Header from '../../components/Header'
import Products from '../../components/Home/Products'
import Post from '../../components/Home/Post'

export default function Home() {
  return (
    <div>
      < Stories />
      <Products />
      <Post />
      <Post />
      <Post />
      <Post />
       <Post />
    </div>
  )
}
