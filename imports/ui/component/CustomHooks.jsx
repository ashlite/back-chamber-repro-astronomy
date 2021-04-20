import { useState, useCallback } from 'react'
import {generatePath} from 'react-router-dom'
import ImageKit from 'imagekit-javascript'

export function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => {
    setValue(v => !v);
  }, []);
  return [value, toggle];
}

export function useFormatTanggal(tanggal = Date, format = String) {
  const hari = ('0'+tanggal.getDate()).slice(-2) 
  const bulan = ('0'+tanggal.getMonth()).slice(-2)
  const tahun = tanggal.getFullYear()
  const jam = ('0'+tanggal.getHours()).slice(-2)
  const menit = ('0'+tanggal.getMinutes()).slice(-2)

  if (format == 'kalender') {
    return (
      hari+'/'+bulan+'/'+tahun
    )
  } else if (format == 'jam'){
    return(
      jam+':'+menit
    )
  } else if (format == 'full'){
    return(
      hari+'/'+bulan+'/'+tahun+" - "+jam+':'+menit
    )
  }
}

export function useIkPublic(){
  return {
    ikPublicKey: 'public_axi4f8H9yoAocsnvr7hRp7EeGQw=',
    ikUrlEndpoint: 'https://ik.imagekit.io/tabletoys',
    ikAuthEndpoint: generatePath('/IKauth')
  }
}