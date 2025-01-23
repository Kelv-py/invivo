import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form className="max-w-md mx-auto">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Name</label>
            <Input id="name" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <Input id="email" type="email" placeholder="Your email" />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">Message</label>
            <Textarea id="message" placeholder="Your message" rows={4} />
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </div>
      </form>
    </div>
  )
}

