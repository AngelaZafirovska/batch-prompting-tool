"use client";
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BatchPromptingForm() {
  const [formState, setFormState] = useState({
    fs1: '',
    fs2: '',
    vs1: '',
    vs2: '',
    vs3: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
    // 
  }

  return (
    <div className="container mx-auto p-6">
      <Card className="w-full max-w-7xl mx-auto">
        <CardHeader>
          <CardTitle className="text-4xl font-bold">Batch Prompting Tool</CardTitle>
          <CardDescription className="text-xl">Enter your prompts and variables for batch processing</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Fixed Seeds</h2>
                <div>
                  <Label htmlFor="fs1" className="text-lg">Fixed Seed 1 (FS1)</Label>
                  <Input
                    id="fs1"
                    name="fs1"
                    value={formState.fs1}
                    onChange={handleInputChange}
                    placeholder="Enter FS1 value"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="fs2" className="text-lg">Fixed Seed 2 (FS2)</Label>
                  <Input
                    id="fs2"
                    name="fs2"
                    value={formState.fs2}
                    onChange={handleInputChange}
                    placeholder="Enter FS2 value"
                    className="mt-1"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Variable Seeds</h2>
                <Tabs defaultValue="vs1" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="vs1">VS1</TabsTrigger>
                    <TabsTrigger value="vs2">VS2</TabsTrigger>
                    <TabsTrigger value="vs3">VS3</TabsTrigger>
                  </TabsList>
                  <TabsContent value="vs1">
                    <Label htmlFor="vs1" className="text-lg">Variable Seed 1 (VS1)</Label>
                    <Textarea
                      id="vs1"
                      name="vs1"
                      value={formState.vs1}
                      onChange={handleInputChange}
                      placeholder="Enter VS1 values (one per line)"
                      required
                      rows={10}
                      className="mt-1"
                    />
                  </TabsContent>
                  <TabsContent value="vs2">
                    <Label htmlFor="vs2" className="text-lg">Variable Seed 2 (VS2)</Label>
                    <Textarea
                      id="vs2"
                      name="vs2"
                      value={formState.vs2}
                      onChange={handleInputChange}
                      placeholder="Enter VS2 values (one per line)"
                      rows={10}
                      className="mt-1"
                    />
                  </TabsContent>
                  <TabsContent value="vs3">
                    <Label htmlFor="vs3" className="text-lg">Variable Seed 3 (VS3)</Label>
                    <Textarea
                      id="vs3"
                      name="vs3"
                      value={formState.vs3}
                      onChange={handleInputChange}
                      placeholder="Enter VS3 values (one per line)"
                      rows={10}
                      className="mt-1"
                    />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            <div className="flex justify-end">
              <Button type="submit" size="lg" className="px-8 py-3 text-lg">
                Process Batch
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}