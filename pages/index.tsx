import { useMachine } from '@xstate/react'
import cartMachine from '../state-machine/index'
import Shop from '../components/Shop'

export default function Home() {
  const [state, send, service] = useMachine(cartMachine, { devTools: true });
  console.log(state)
  console.log(service)

  return (
    <>
      <Shop />
    </>
  )
}
