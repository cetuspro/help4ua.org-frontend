import { useTranslation } from 'react-i18next'

const ViewRodo = () => {
  const { t } = useTranslation()
  return (
    <div className='container mx-auto p-5'>
      <h3 className='mb-5 size-xl'>
        {t('RODO.title')}
      </h3>
      <p>
        {t('RODO.subtitle')}
      </p>
      <ol className='list-decimal pl-5'>
        <li className='mb-2'>
          {t('RODO.p1')}
        </li>
        <li className='mb-2'>
          {t('RODO.p2')}
        </li>
        <li className='mb-2'>
          {t('RODO.p3')}
        </li>
        <li className='mb-2'>
          {t('RODO.p4')}
        </li>
        <li>
          {t('RODO.p5')}
          <ol className='list-disc pl-5 mb-2'>
            <li>
              {t('RODO.p5a')}
            </li>
            <li>
              {t('RODO.p5b')}
            </li>
            <li>
              {t('RODO.p5c')}
            </li>
            <li>
              {t('RODO.p5d')}
            </li>
            <li>
              {t('RODO.p5e')}
            </li>
          </ol>
          <div className='mb-2'>
            {t('RODO.p5f')}
          </div>
        </li>
        <li className='mb-2'>
          {t('RODO.p6')}
        </li>
        <li className='mb-2'>
          {t('RODO.p7')}
        </li>
        <li className='mb-2'>
          {t('RODO.p8')}
        </li>
        <li className='mb-2'>
          {t('RODO.p9')}
        </li>
      </ol>
    </div>
  )
}

export default ViewRodo