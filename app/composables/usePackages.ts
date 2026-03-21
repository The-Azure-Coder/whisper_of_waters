import type { Package } from '~/../shared/types/package'

export const usePackages = () => {
  const packages = useState<Package[]>('packages', () => [])
  const currentPackage = useState<Package | null>('currentPackage', () => null)

  const fetchPackages = async () => {
    try {
      const data = await $fetch<Package[]>('/api/packages')
      packages.value = data
    } catch (error) {
      console.error('Failed to fetch packages:', error)
    }
  }

  const fetchPackageById = async (id: string | number) => {
    try {
      const data = await $fetch<Package>(`/api/packages/${id}`)
      currentPackage.value = data
      return data
    } catch (error) {
      console.error(`Failed to fetch package ${id}:`, error)
      return null
    }
  }

  return {
    packages,
    currentPackage,
    fetchPackages,
    fetchPackageById
  }
}
