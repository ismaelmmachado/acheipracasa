// Exemplo de como deve estar o teu sanity/lib/client.ts
import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Define como false para os teus links de afiliado atualizarem na hora
})