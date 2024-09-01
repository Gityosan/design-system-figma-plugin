import { ref, onMounted } from 'vue'

interface DeviceInfo {
  userAgent: string
  platform: string
  language: string
  screenWidth: number
  screenHeight: number
  windowWidth: number
  windowHeight: number
  isOnline: boolean
  devicePixelRatio: number
  colorDepth: number
  browserName: string
  browserVersion: string
  isDesktop: boolean
  isTablet: boolean
  isMobile: boolean
  isIOS: boolean
  isAndroid: boolean
  isMacOS: boolean
  isWindows: boolean
  isLinux: boolean
}

export function useDeviceInfo() {
  const deviceInfo = ref<DeviceInfo>({
    userAgent: '',
    platform: '',
    language: '',
    screenWidth: 0,
    screenHeight: 0,
    windowWidth: 0,
    windowHeight: 0,
    isOnline: false,
    devicePixelRatio: 1,
    colorDepth: 0,
    browserName: '',
    browserVersion: '',
    isDesktop: false,
    isTablet: false,
    isMobile: false,
    isIOS: false,
    isAndroid: false,
    isMacOS: false,
    isWindows: false,
    isLinux: false
  })

  onMounted(() => {
    const ua = navigator.userAgent

    deviceInfo.value = {
      userAgent: ua,
      platform: navigator.platform,
      language: navigator.language,
      screenWidth: screen.width,
      screenHeight: screen.height,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      isOnline: navigator.onLine,
      devicePixelRatio: window.devicePixelRatio,
      colorDepth: screen.colorDepth,
      browserName: getBrowserName(ua),
      browserVersion: getBrowserVersion(ua),
      isDesktop: !(/Mobi|Android/i.test(ua)),
      isTablet: /Tablet|iPad/i.test(ua),
      isMobile: /Mobi|Android/i.test(ua),
      isIOS: /iPad|iPhone|iPod/.test(ua),
      isAndroid: /Android/.test(ua),
      isMacOS: /Mac OS X/.test(ua),
      isWindows: /Win/.test(ua),
      isLinux: /Linux/.test(ua)
    }
  })

  function getBrowserName(ua: string): string {
    if (ua.includes('Firefox')) return 'Firefox'
    if (ua.includes('Chrome')) return 'Chrome'
    if (ua.includes('Safari')) return 'Safari'
    if (ua.includes('Opera') || ua.includes('OPR')) return 'Opera'
    if (ua.includes('Edge')) return 'Edge'
    if (ua.includes('MSIE') || ua.includes('Trident/')) return 'Internet Explorer'
    return 'Unknown'
  }

  function getBrowserVersion(ua: string): string {
    const match = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []
    if (match[1] === 'Trident') {
      const versionMatch = /\brv[ :]+(\d+)/g.exec(ua) || []
      return versionMatch[1] || ''
    }
    if (match[1] === 'Chrome' && ua.match(/\bOPR\/(\d+)/) !== null) {
      return ua.match(/\bOPR\/(\d+)/)![1]
    }
    return match[2] || ''
  }

  return deviceInfo
}
