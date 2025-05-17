import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-green-600 mt-1 mr-3" />
            <div>
              <p className="font-medium">Address</p>
              <p className="text-gray-600">
                123 Trading Street
                <br />
                Business District
                <br />
                New York, NY 10001
                <br />
                United States
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Phone className="h-5 w-5 text-green-600 mt-1 mr-3" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-start">
            <Mail className="h-5 w-5 text-green-600 mt-1 mr-3" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-gray-600">info@beansandpods.com</p>
            </div>
          </div>

          <div className="flex items-start">
            <Clock className="h-5 w-5 text-green-600 mt-1 mr-3" />
            <div>
              <p className="font-medium">Business Hours</p>
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 5:00 PM EST
                <br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">International Offices</h2>
        <div className="space-y-4">
          <div>
            <p className="font-medium">Europe</p>
            <p className="text-gray-600">
              45 Commerce Road
              <br />
              Amsterdam, Netherlands
            </p>
          </div>

          <div>
            <p className="font-medium">Asia Pacific</p>
            <p className="text-gray-600">
              78 Trading Avenue
              <br />
              Singapore
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
