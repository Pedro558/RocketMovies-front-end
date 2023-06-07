import { Textarea } from "../../components/Textarea";
import { Section } from '../../components/Section';

export function New(){
  return(
    <>
      <div>New Page</div>

      <Textarea placeholder='Observações'/>

      <Section title='Marcadores'>
        <div>Example</div>
      </Section>
    </>
  )
}