import {createServer, AddressInfo}  from 'net'
 const findPort = (port:number | string): Promise<number> => {
  return new Promise((resolve, reject) => {

    const server = createServer()

    server.listen(port, () => {

      const address = server.address()

      let PORT: number

      if (typeof address === 'object' && address !== null) {
          const {port} = address as AddressInfo
          PORT= port 
      }

      server.close(()=> {
        resolve(PORT)
      })

    })



    server.on('error', (err:NodeJS.ErrnoException) => {
      if (err.code === 'EADDRINUSE') {
        resolve(findPort(0))
      }else{
        reject(err.message)
      }
    })

  })
}

export {findPort}