import { Envelope, Lock } from 'phosphor-react';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Logo } from './Logo';
import './styles/global.css';
import { SignIn } from "./pages/SignIn";

export function App() {
  return (
    <SignIn />
  )
}