import { type SchemaTypeDefinition } from 'sanity'

import pageInfo from './schemas/pageInfo'
import experience from './schemas/experience'
import project from './schemas/project'
import skill from './schemas/skill'
import social from './schemas/social'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, experience, project, skill, social],
}
