'use client';
import React from 'react'
import { useState } from 'react'


import { useRouter } from 'next/navigation'

const CreateNote = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const router = useRouter()

    const create = async() => {
        const notesUrl = `http://127.0.0.1:8090/api/collections/notes/records`
    const res = await fetch(notesUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            content
        })
    });
    setContent("")
    setTitle("")
    router.refresh()
    }

  return (
    <form onSubmit={create} className="bg-blue-100 p-2 gap-4 rounded-md shadow-md flex flex-col items-center justify-center">
        <input
        type="text"
        placeholder='Title'
        value={title}
        className="p-1 rounded-md shadow-sm outline-none "
        onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
        placeholder='Content'
        value={content}
        className="w-[300px] h-[100px] rounded-md shadow-sm p-1 resize-none outline-none"
        onChange={(e) => setContent(e.target.value)}
        />
        <button type='submit' className='bg-green-200 p-1 font-kalam shadow-md items-center rounded-md justify-center duration-300 hover:bg-yellow-200'>
            create note
        </button>
    </form>
  )
}

export default CreateNote
