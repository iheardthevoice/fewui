/**
 * Ortak boyut sözlüğü — bileşen `size` prop'ları bu kümelerden türer.
 * `check-api-consistency` yerel `*SIZES` sabitlerini `SIZE_SCALE` ile denetler.
 */

/** Kontrol ölçüsü: button, input, select, segment (aynı `size` = aynı yükseklik). */
export const CONTROL_SIZES = Object.freeze(['sm', 'md', 'lg'])

/** Görsel ölçek: avatar, ikon, karo gibi kontrol dışı öğeler. */
export const SCALE_SIZES = Object.freeze(['xs', 'sm', 'md', 'lg', 'xl'])

/** İzin verilen tüm boyut adları (rakam / büyük değer ölçekleri `2xl`'e kadar). */
export const SIZE_SCALE = Object.freeze(['xs', 'sm', 'md', 'lg', 'xl', '2xl'])
