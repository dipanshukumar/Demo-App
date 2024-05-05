import { useState } from 'react';
import Image from 'next/image'
import Head from 'next/head';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from '../styles/Home.module.css';


export default function Home({posts}) {
  
  const [data, setData] = useState(posts);
  console.log(data)
  return (
    <div className={styles.container}>
      <Head>
        <title>Demo App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />

      </Head>

      <main>
      <Typography variant="h2" className={styles.title}>
      Welcome to Demo App
      </Typography>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Product Price</TableCell>
            <TableCell align="right">Product Thumbnail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.products.map((product) => (
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.title}
              </TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right">
              <Image 
                    src={product.thumbnail} 
                    width={150}
                    height={150}
                    alt={product.title}
              />
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </main>
    </div>
  );
}

export const getServerSideProps = ( async () => {
  const res = await fetch('https://dummyjson.com/products')
  const posts = await res.json()

  console.log(posts)
  return { props: { posts } }
})