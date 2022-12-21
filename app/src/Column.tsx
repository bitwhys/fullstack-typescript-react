import { CardContainer, ColumnContainer, ColumnTitle } from './styles'
import { Card } from './Card'

interface ColumnParams {
  title: string
}

export const Column = ({ title }: ColumnParams) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      <Card text="Generate app scaffold" />
      <Card text="Learn TypeScript" />
      <Card text="Begin to use static typing" />
    </ColumnContainer>
  )
}
