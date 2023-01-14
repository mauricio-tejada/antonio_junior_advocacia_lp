import { DefaultButton } from '../Buttons/Buttons'
import { Content, FormContainer, LeadCaptureContainer } from './style'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useState } from 'react'

export function LeadCapture() {
  const leadCaptureFormValitationSchema = zod.object({
    primeiro_nome: zod.string().min(1, 'Informe seu primeiro nome'),
    ultimo_nome: zod.string().min(1, 'Informe seu último nome'),
    email: zod.string().min(1, 'Informe seu email'),
    telefone: zod.string().min(1, 'Informe seu telefone'),
    caso: zod.string().min(1, 'Informe seu caso'),
  })

  type leadCaptureFormData = zod.infer<typeof leadCaptureFormValitationSchema>
  const [formData, setFormData] = useState<leadCaptureFormData>()

  const { register, reset, handleSubmit, formState } =
    useForm<leadCaptureFormData>({
      resolver: zodResolver(leadCaptureFormValitationSchema),
    })

  function handleCreateNewSubmit(data: leadCaptureFormData) {
    setFormData(data)
    console.log(formData)
    reset()
  }

  return (
    <LeadCaptureContainer id="contato">
      <Content>
        <FormContainer>
          <h2>Realize sua consulta sem custo</h2>
          <p>
            Fale um pouco sobre o seu problema jurídico, assim que nossa equipe
            avaliar, entraremos em contato!
          </p>
          <form onSubmit={handleSubmit(handleCreateNewSubmit)} action="">
            <div>
              <input
                {...register('primeiro_nome')}
                placeholder="Primeiro nome"
              />
              <input {...register('ultimo_nome')} placeholder="Último nome" />
            </div>

            <div>
              <input {...register('email')} placeholder="E-mail" />
              <input
                {...register('telefone')}
                placeholder="Número de telefone"
              />
            </div>

            <textarea
              {...register('caso')}
              cols={25}
              rows={10}
              placeholder="Conte um pouco sobre o seu caso..."
            ></textarea>

            <DefaultButton type="submit">
              Enviar consulta gratuita
            </DefaultButton>
          </form>
        </FormContainer>
      </Content>
    </LeadCaptureContainer>
  )
}
