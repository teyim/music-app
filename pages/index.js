import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    try {
      fetch(`/api/hello`).then((response) => response.json()).then(response => console.log(response))
    } catch (error) {
      console.log(error)
    }

  }, [])

  return (
    <div>
      <h2>hello world</h2>
    </div>
  )
}
