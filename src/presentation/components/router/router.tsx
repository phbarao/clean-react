import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

interface Props {
  makeLogin: React.FC
}

const Router: React.FC<Props> = ({ makeLogin }: Props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={makeLogin} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
