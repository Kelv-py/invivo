"use client"

import * as React from "react"
import Link from 'next/link'
import { Menu } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function NavMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="bg-yellow-400">
          <Menu className="h-[1.2rem] w-[1.2rem] text-white" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href="/">Home</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/products-and-services">Products & Services</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/blog">Blog</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/contact">Contact</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

