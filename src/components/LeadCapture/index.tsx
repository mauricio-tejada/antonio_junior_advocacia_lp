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
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useState } from 'react'

export function LeadCapture() {
  const leadCaptureFormValitationSchema = zod.object({
    primeiro_nome: zod.string().min(1, 'Favor preencher'),
    ultimo_nome: zod.string().min(1, 'Favor preencher'),
    email: zod.string().min(1, 'Favor preencher'),
    telefone: zod.string().min(1, 'Favor preencher'),
    caso: zod.string().min(1, 'Favor preencher'),
  })

  type leadCaptureFormData = zod.infer<typeof leadCaptureFormValitationSchema>
  const [formData, setFormData] = useState<leadCaptureFormData>()

  const { register, reset, handleSubmit, formState } =
    useForm<leadCaptureFormData>({
      resolver: zodResolver(leadCaptureFormValitationSchema),
    })

  function handleCreateNewSubmit(data: leadCaptureFormData) {
    setFormData(data)
    reset()
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
          <form onSubmit={handleSubmit(handleCreateNewSubmit)} action="">
            <FormRow>
              <InputContainer>
                <Input
                  {...register('primeiro_nome')}
                  placeholder="Primeiro nome"
                  onEmpty={!!formState.errors.primeiro_nome}
                />
                <p>{formState.errors.primeiro_nome?.message}</p>
              </InputContainer>

              <InputContainer>
                <Input
                  {...register('ultimo_nome')}
                  placeholder="Último nome"
                  onEmpty={!!formState.errors.ultimo_nome}
                />
                <p>{formState.errors.ultimo_nome?.message}</p>
              </InputContainer>
            </FormRow>

            <FormRow>
              <InputContainer>
                <Input
                  {...register('email')}
                  placeholder="E-mail"
                  onEmpty={!!formState.errors.email}
                />
                <p>{formState.errors.email?.message}</p>
              </InputContainer>

              <InputContainer>
                <Input
                  {...register('telefone')}
                  placeholder="Número de telefone"
                  onEmpty={!!formState.errors.telefone}
                />
                <p>{formState.errors.telefone?.message}</p>
              </InputContainer>
            </FormRow>

            <InputContainer>
              <TextArea
                {...register('caso')}
                cols={25}
                rows={10}
                placeholder="Conte um pouco sobre o seu caso..."
                onEmpty={!!formState.errors.caso}
              />
              <p>{formState.errors.caso?.message}</p>
            </InputContainer>

            <DefaultButton type="submit">
              Enviar consulta gratuita
            </DefaultButton>
          </form>
        </FormContainer>
      </Content>
    </LeadCaptureContainer>
  )
}
