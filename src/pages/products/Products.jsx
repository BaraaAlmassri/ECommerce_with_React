import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Products() {
  const {t} = useTranslation();
  console.log( t.language);

  return (
    <div>{t("Products")}</div>
  )
}
