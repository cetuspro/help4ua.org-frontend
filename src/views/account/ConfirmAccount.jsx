import Button from "@/components/common/Button";
import { confirmAccount } from "../../app/CRUD/account/confirmAccount";
import { useEffect, useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { useNavigate, useSearchParams } from "react-router-dom";
import logo from '../../assets/img/UAPOMOC.png'
import cityLife from '../../assets/img/undraw_city_life.png'
import { route } from "@/app/router/urls/routes";

const ConfirmAccount = () => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('userId');
  const token = searchParams.get('token');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    confirmAccount(userId, token).catch(err => {
      setError(`Wystąpił błąd, nie możemy zweryfikować Twojego konta${err?.response?.data?.title ? ': '+err?.response?.data?.title : ''}`);
    }).finally(() => {
      setIsLoading(false);
    })
  }, [userId, token])

  return (
    <div className="flex flex-col flex-1 justify-center items-center bg-gray-100 gap-6">
      <img src={logo} alt=" UA Pomoc" className="h-[8vh]"/>
      <div className="bg-white w-3/4 lg:w-1/2 p-6 flex flex-col items-center rounded">
        {!userId || !token ? (
          <div>Nieprawidłowy link</div>
        ) : isLoading ? <>
          <div className="mb-4 text-lg">Weryfikujemy Twoje konto</div>
          <BiLoaderCircle size={100} className="animate-spin-slow"/>
        </> : error ? (
          <div>{error}</div>
        ) : <>
          <img src={cityLife} alt=""/>
          <div className="mb-5">Twoje konto zostało aktywowane, zaloguj się i zacznij korzystać z serwisu.</div>
          <Button to={route['auth.login']}>Zaloguj się</Button>
        </>}
      </div>
    </div>
  )
}

export default ConfirmAccount