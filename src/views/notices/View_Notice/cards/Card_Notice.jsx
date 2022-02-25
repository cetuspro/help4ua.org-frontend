import { useQueryContext } from '@/app/context/queries/QueryProvider'
import { route } from '@/app/router/urls/routes'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'

const Item = ({label, value}) => {
  return (
    <div className="py-2 flex gap-2">
      <span className="">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  )
}

const NoticeCard = () => {
  const { data } = useQueryContext()

  return (
    <Card>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <Item label="Opis:" value={data.description}/>
          <Item label="Adres:" value={
            <a
              href={`http://www.google.com/maps/place/${data.location?.lat},${data.ocation?.long}`}
              title="Zobacz na mapie"
              className="flex flex-col"
            >
              <span>{data.cityName}, {data.region}</span>
              <span>{data.address}</span>
            </a>}
          />
          <Item label="Liczba łóżek:" value={data.bedCount}/>
          <Item label="Na okres:" value={data.period}/>
        </div>
        <div className="flex-1">
          <Item label="Przyjmę z małym dzieckiem:" value={data.isAcceptedChild ? 'TAK' : 'NIE'}/>
          <Item label="Przyjmę ze zwierzętami:" value={data.isAcceptedAnimal ? 'TAK' : 'NIE'}/>
          <Item label="Dostęp do pralki:" value={data.hasWashingMachine ? 'TAK' : 'NIE'}/>
          <Item label="Zapewniam wyżywienie:" value={data.isCatering ? 'TAK' : 'NIE'}/>
          <Item label="Zapewniam transport:" value={data.isDelivery ? 'TAK' : 'NIE'}/>
        </div>
      </div>
      <Button to={route['notices.list']} className="mt-10 mx-auto w-fit" size="small">Wróć do listy ogłoszeń</Button>
    </Card>
  )
}

export default NoticeCard
