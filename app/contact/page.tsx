"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
  
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
  
      if (!res.ok) throw new Error("Email failed")
  
      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
  
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      alert("There was an error sending your message.")
    } finally {
      setIsSubmitting(false)
    }
  }
  

  return (
    <main className="min-h-screen bg-purple-50 px-4 py-12 md:px-6 lg:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-purple-900">contact</h1>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-purple-800">get in touch</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-purple-600" />
                <a href="mailto:manavk@umich.edu" className="text-purple-700 hover:text-purple-900 hover:underline">
                  manavk@umich.edu
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-purple-600" />
                <a href="tel:+8588478020" className="text-purple-700 hover:text-purple-900 hover:underline">
                  (858) 847-8020
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-purple-800">social links</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3 text-purple-600"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <a
                  href="https://www.linkedin.com/in/manav-khanvilkar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 hover:text-purple-900 hover:underline"
                >
                  linkedin.com/in/manav-khanvilkar
                </a>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3 text-purple-600"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <a
                  href="https://github.com/kaavlu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 hover:text-purple-900 hover:underline"
                >
                  github.com/kaavlu
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold text-purple-800">send me a message</h2>

          {submitted ? (
            <div className="rounded-md bg-purple-100 p-4 text-center text-purple-800">
              thanks for your message! i'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-purple-700">
                  name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-purple-200 bg-purple-50 p-3 text-purple-800 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200"
                  placeholder="your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-purple-700">
                  email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-purple-200 bg-purple-50 p-3 text-purple-800 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200"
                  placeholder="your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-purple-700">
                  message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full rounded-md border border-purple-200 bg-purple-50 p-3 text-purple-800 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200"
                  placeholder="what would you like to talk about?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center rounded-md bg-purple-600 px-6 py-3 text-white transition-colors hover:bg-purple-700 disabled:bg-purple-400"
              >
                {isSubmitting ? (
                  "sending..."
                ) : (
                  <>
                    send message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
