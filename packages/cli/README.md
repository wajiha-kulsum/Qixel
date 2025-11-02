# @qixel/cli

CLI tool for adding animated React components to your project.

## Installation

```bash
npm install -g @qixel/cli
```

## Usage

### Initialize your project

```bash
qixel init
```

This creates a `qixel.json` config file in your project.

### List available components

```bash
qixel list
```

### Add a component

```bash
qixel add magnetic-button
```

This will:
1. Copy the component source to your project
2. Automatically install required dependencies (framer-motion, etc.)

## Example

```bash
# Initialize
qixel init

# Add magnetic button
qixel add magnetic-button

# Use in your React app
import { MagneticButton } from '@/components/qixel/buttons/magnetic-button'

function App() {
  return <MagneticButton>Click me!</MagneticButton>
}
```

## Shadcn-style workflow

Like shadcn/ui, Qixel components are:
- ✅ Copy-pasted directly into your project (you own the code)
- ✅ Fully customizable
- ✅ No package dependency
- ✅ TypeScript ready

