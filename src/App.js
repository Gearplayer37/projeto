import { useState, useEffect } from 'react';
import { db, auth }from './firebaseConnection';
import './estilo.css';

import {
  doc,
  setDoc,
  collection,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot

}from 'firebase/firestore'

import {

  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged

}from 'firebase/auth'

function App(){
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [idPost, setIdPost] = useState("");

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [post, setPost] = useState([]);

  useEffect(()=> {
    async function consultarPosts(){
      const dados = onSnapshot(collection(db, 'post'),(snapshot) => {
        let listaPost = [];
        snapshot.forEach((doc) => {
          listaPost.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor,
          })
        })
        setIdPost(listaPost);
      })
    }
    consultarPosts();
  },[] )

  async function adicionarPost(){
    await addDoc(collection(db, "post"), {
      titulo: titulo,
      autor: autor,
    }).then(() => {
      setIdPost("")
      setTitulo("")
      setAutor("")
    }).catch((error) => {
      console.log(error)
    })
  }

  async function buscarPost(){
    const postsReferencia = collection(db, "post");
    await getDocs(postsReferencia).then(
      (snapshot) =>{
        let lista = [];
        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor,
          })
        })
        setPost(lista);
      }).catch((error) => {
        console.log(error);
      })
  }

  async function editarPost(){
    const dados = doc(db, "post", idPost);

    await updateDoc(dados, {
      titulo: titulo,
      autor: autor,
    }).then(()=>{
      setIdPost("");
      setTitulo("");
      setAutor("");
    }).catch((error) =>{
      console.log(error)
    })
  }

  async function excluirPost(idPost){
    const dados = doc(db, "post", idPost);

    await deleteDoc(dados).then(()=>{
      alert ("POST DELETADO COM SUCESSO")
    })
  }


 
  
  
}

export default App;


