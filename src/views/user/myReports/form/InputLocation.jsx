import { useState } from 'react'
import Button from '@/components/common/Button'
import Modal from '@/components/common/Modal'
import { FiMapPin } from 'react-icons/fi'
import { MapContainer, TileLayer } from 'react-leaflet'
import { InputText } from '@/components/form/Input_Text'
import { useFormContext } from 'react-hook-form'
import PlaceMarker from './PlaceMarker'

const InputLocation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const methods = useFormContext()

  return (
    <>
      <Button
        type="button"
        color="secondary"
        className="mt-2"
        onClick={() => setIsOpen((prev) => !prev)}>
        <FiMapPin size={24} color="currentColor" />
        Dodaj lokalizację
      </Button>
      <Modal title="Dodaj lokalizację" open={isOpen} setOpen={setIsOpen}>
        <>
          <MapContainer
            minZoom={12}
            center={methods.getValues('localization')}
            zoom={14}
            scrollWheelZoom={true}
            className="rounded-lg"
            style={{
              height: '400px',
              width: '100%',
            }}>
            <PlaceMarker />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
          <div className="flex justify-between gap-4 mt-5">
            <InputText
              type="text"
              icon={FiMapPin}
              name="localization.lat"
              placeholder={'Wprowadź szerokość'}
              label="Szerokość geograficzna"
              required
            />
            <InputText
              type="text"
              icon={FiMapPin}
              name="localization.lng"
              placeholder={'Wprowadź dlugość'}
              label="Długość geograficzna"
              required
            />
          </div>
          <div className="mt-4 flex justify-end gap-4 mb-5">
            {/* <Button color="secondary" onClick={() => setIsOpen(false)}>
              Anuluj
            </Button> */}
            <Button onClick={() => setIsOpen(false)}>Zapisz</Button>
          </div>
        </>
      </Modal>
    </>
  )
}

export default InputLocation
