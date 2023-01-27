import { DefaultButton } from '../Buttons/Buttons'
import {
  Content,
  FormContainer,
  FormRow,
  Input,
  InputContainer,
  LeadCaptureContainer,
  TextArea,
} from './style'
// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import * as zod from 'zod'
// import { useState } from 'react'

import { useForm as useFormspree, ValidationError } from '@formspree/react'

export function LeadCapture() {
  // const leadCaptureFormValitationSchema = zod.object({
  //   primeiro_nome: zod.string().min(1, 'Favor preencher'),
  //   ultimo_nome: zod.string().min(1, 'Favor preencher'),
  //   email: zod.string().min(1, 'Favor preencher'),
  //   telefone: zod.string().min(1, 'Favor preencher'),
  //   caso: zod.string().min(1, 'Favor preencher'),
  // })

  // type leadCaptureFormData = zod.infer<typeof leadCaptureFormValitationSchema>
  // // const [formData, setFormData] = useState<leadCaptureFormData>()

  // const { register, reset, formState } = useForm<leadCaptureFormData>({
  //   resolver: zodResolver(leadCaptureFormValitationSchema),
  // })

  // function handleCreateNewSubmit(data: leadCaptureFormData) {
  //   setFormData(data)
  //   reset()
  // }

  const [state, handleSubmit] = useFormspree('mzbqdzjv')
  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }

  return (
    <LeadCaptureContainer id="contato">
      <Content>
        <FormContainer>
          <header>
            <h2>Realize sua consulta sem custo</h2>
            <p>
              Fale um pouco sobre o seu problema jurídico, assim que nossa
              equipe avaliar, entraremos em contato!
            </p>
          </header>
          <form onSubmit={handleSubmit} action="">
            <FormRow>
              <InputContainer>
                <Input placeholder="Primeiro nome" />
                <ValidationError
                  prefix="Primeiro nome"
                  field="Primeiro nome"
                  errors={state.errors}
                />
                {/* <p>{formState.errors.primeiro_nome?.message}</p> */}
              </InputContainer>

              <InputContainer>
                <Input placeholder="Último nome" />
                <ValidationError
                  prefix="Último nome"
                  field="Último nome"
                  errors={state.errors}
                />
                {/* <p>{formState.errors.ultimo_nome?.message}</p> */}
              </InputContainer>
            </FormRow>

            <FormRow>
              <InputContainer>
                <Input placeholder="E-mail" />
                <ValidationError
                  prefix="Email"
                  field="Email"
                  errors={state.errors}
                />
                {/* <p>{formState.errors.email?.message}</p> */}
              </InputContainer>

              <InputContainer>
                <Input placeholder="Número de telefone" />
                <ValidationError
                  prefix="Número de telefone"
                  field="Número de telefone"
                  errors={state.errors}
                />
                {/* <p>{formState.errors.telefone?.message}</p> */}
              </InputContainer>
            </FormRow>

            <InputContainer>
              <TextArea
                cols={25}
                rows={10}
                placeholder="Conte um pouco sobre o seu caso..."
              />
              <ValidationError
                prefix="caso"
                field="caso"
                errors={state.errors}
              />
              {/* <p>{formState.errors.caso?.message}</p> */}
            </InputContainer>

            <DefaultButton type="submit" disabled={state.submitting}>
              Enviar consulta gratuita
            </DefaultButton>
          </form>
        </FormContainer>
      </Content>
    </LeadCaptureContainer>
  )
}
