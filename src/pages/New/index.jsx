import { Textarea } from "../../components/Textarea";
import { Section } from '../../components/Section';
import { NoteItem } from "../../components/NoteItem";

import {Container } from './styles'

export function New(){
  return(
    <Container>
      <div>New Page</div>

      <Textarea placeholder='Observações'/>

      <Section title='Marcadores'>
        <div className='tags'>
          <NoteItem value='https://rocketseat.com'/>
          <NoteItem isNew placeholder='Novo Link'/>
        </div>
      </Section>


    </Container>
  )
}