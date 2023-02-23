import React from 'react'
import PocketBase from 'pocketbase'
import Link from 'next/link';
import CreateNote from './[id]/CreateNote';


export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 0,
    fetchCache = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto'


const getNotes = async () => {

    //Pocket base SDK method
    const db = new PocketBase('http://127.0.0.1:8090')
    const data = await db.collection('notes').getList()
    
    // Fetch API method with pocketbase REST API

    //const notesUrl = "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30"
    //const res = await fetch(notesUrl, {cache: 'no-store'});
    //const data =  await res.json()

    return data?.items as any[]
}

const NotesPage = async () => {
    const notes = await getNotes();

  return (
    <div className='w-full h-screen flex items-center  flex-col gap-10'>
      <h1 className='bg-blue-100 font-kalam mt-20 p-2 text-3xl font-bold shadow-md rounded-md'>Your Notes</h1>
      <div className='grid grid-cols-3 gap-2'>
        {notes?.map((note) => {
            return <Note key={note.id} note = {note} />
        })}
      </div>
      
      <div className=' ml-[900px]  bottom-10  sticky'>
      <CreateNote/>
      </div>
    </div>
  )
}

export default NotesPage

const Note = ({note}:any) => {
    const {id,title,content,created} = note || {}

    return (
        <Link href={`/notes/${id}`}>
        <div className='bg-rose-100 p-2 rounded-md shadow-md w-40'>
            <h2 className=' font-kalam font-extrabold'>{title}</h2>
            <h5>{content}</h5>
            <p className='text-white '>{created.split(" ")[0]}</p>
        </div>
        </Link>
    )
}
