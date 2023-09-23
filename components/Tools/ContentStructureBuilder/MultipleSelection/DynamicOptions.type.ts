import React, { useState } from 'react'

export interface DynamicOptionsProps {
  Source?: any
  title?: string
  onOptionsChange?: (options: string[]) => void
}
