const CUSTOMERS: Customer[] = [
  {
    customer_id: 1,
    name: 'Tech Innovators Inc.',
    address: '123 Silicon Valley, San Jose, CA 95131',
    contact_number: '+1-408-555-1234',
    email: 'contact@techinnovators.com',
  },
  {
    customer_id: 2,
    name: 'Green Energy Corp.',
    address: '456 Solar Blvd, Austin, TX 78701',
    contact_number: '+1-512-555-5678',
    email: 'info@greenenergy.com',
  },
  {
    customer_id: 3,
    name: 'Urban Builders LLC',
    address: '789 Construction Ave, Denver, CO 80202',
    contact_number: '+1-303-555-9101',
    email: 'sales@urbanbuilders.com',
  },
  {
    customer_id: 4,
    name: 'Cloud Solutions Ltd.',
    address: '101 Cloud St, Seattle, WA 98101',
    contact_number: '+1-206-555-2345',
    email: 'support@cloudsolutions.com',
  },
  {
    customer_id: 5,
    name: 'Smart Home Systems',
    address: '202 Tech Park, Palo Alto, CA 94304',
    contact_number: '+1-650-555-6789',
    email: 'info@smarthomesystems.com',
  },
  {
    customer_id: 6,
    name: 'Digital Marketing Group',
    address: '303 Market St, New York, NY 10001',
    contact_number: '+1-212-555-1111',
    email: 'contact@digitalmarketing.com',
  },
  {
    customer_id: 7,
    name: 'Financial Advisors Co.',
    address: '404 Wall St, New York, NY 10005',
    contact_number: '+1-212-555-2222',
    email: 'support@financialadvisors.com',
  },
  {
    customer_id: 8,
    name: 'Healthcare Partners',
    address: '505 Health Blvd, Boston, MA 02115',
    contact_number: '+1-617-555-3333',
    email: 'info@healthcarepartners.com',
  },
  {
    customer_id: 9,
    name: 'Auto Parts Direct',
    address: '606 Motorway, Detroit, MI 48201',
    contact_number: '+1-313-555-4444',
    email: 'sales@autopartsdirect.com',
  },
  {
    customer_id: 10,
    name: 'Education Hub Ltd.',
    address: '707 Learning St, San Francisco, CA 94107',
    contact_number: '+1-415-555-5555',
    email: 'info@educationhub.com',
  },
  {
    customer_id: 11,
    name: 'Retail Solutions Inc.',
    address: '808 Commerce Blvd, Chicago, IL 60607',
    contact_number: '+1-312-555-6666',
    email: 'support@retailsolutions.com',
  },
  {
    customer_id: 12,
    name: 'Hospitality Experts',
    address: '909 Hotel Ave, Las Vegas, NV 89109',
    contact_number: '+1-702-555-7777',
    email: 'contact@hospitalityexperts.com',
  },
  {
    customer_id: 13,
    name: 'Logistics Worldwide',
    address: '1010 Transport Ln, Miami, FL 33101',
    contact_number: '+1-305-555-8888',
    email: 'info@logisticsworldwide.com',
  },
  {
    customer_id: 14,
    name: 'Real Estate Brokers',
    address: '1111 Property St, Los Angeles, CA 90015',
    contact_number: '+1-213-555-9999',
    email: 'support@realestatebrokers.com',
  },
  {
    customer_id: 15,
    name: 'Cyber Security Solutions',
    address: '1212 Secure Blvd, Washington, DC 20001',
    contact_number: '+1-202-555-0000',
    email: 'contact@cybersecuritysolutions.com',
  },
  {
    customer_id: 16,
    name: 'E-commerce World',
    address: '1313 Shop St, Atlanta, GA 30303',
    contact_number: '+1-404-555-1112',
    email: 'info@ecommerceworld.com',
  },
  {
    customer_id: 17,
    name: 'Aerospace Innovations',
    address: '1414 Flight Ave, Houston, TX 77002',
    contact_number: '+1-713-555-1314',
    email: 'support@aerospaceinnovations.com',
  },
  {
    customer_id: 18,
    name: 'Pharma Care Inc.',
    address: '1515 Health Dr, Philadelphia, PA 19103',
    contact_number: '+1-215-555-1516',
    email: 'info@pharmacare.com',
  },
  {
    customer_id: 19,
    name: 'Media Networks Ltd.',
    address: '1616 Broadcast Rd, Los Angeles, CA 90028',
    contact_number: '+1-323-555-1617',
    email: 'contact@medianetworks.com',
  },
  {
    customer_id: 20,
    name: 'Automotive Engineering Co.',
    address: '1717 Drive St, Detroit, MI 48202',
    contact_number: '+1-313-555-1718',
    email: 'support@automotiveengineering.com',
  },
  {
    customer_id: 21,
    name: 'Telecom Solutions Group',
    address: '1818 Connect Blvd, San Diego, CA 92101',
    contact_number: '+1-619-555-1819',
    email: 'info@telecomsolutions.com',
  },
  {
    customer_id: 22,
    name: 'Fashion Designers LLC',
    address: '1919 Style Ave, New York, NY 10018',
    contact_number: '+1-212-555-1920',
    email: 'contact@fashiondesigners.com',
  },
  {
    customer_id: 23,
    name: 'Construction Masters',
    address: '2020 Build Rd, Dallas, TX 75201',
    contact_number: '+1-214-555-2021',
    email: 'info@constructionmasters.com',
  },
  {
    customer_id: 24,
    name: 'Beverage Distributors Co.',
    address: '2121 Drink Blvd, Portland, OR 97209',
    contact_number: '+1-503-555-2122',
    email: 'support@beveragedistributors.com',
  },
  {
    customer_id: 25,
    name: 'Sports Equipment Inc.',
    address: '2222 Sporty Way, Chicago, IL 60616',
    contact_number: '+1-312-555-2223',
    email: 'contact@sportsequipment.com',
  },
  {
    customer_id: 26,
    name: 'Legal Services Group',
    address: '2323 Justice Ave, Boston, MA 02116',
    contact_number: '+1-617-555-2324',
    email: 'info@legalservices.com',
  },
  {
    customer_id: 27,
    name: 'Consulting Experts Ltd.',
    address: '2424 Advisor St, San Francisco, CA 94108',
    contact_number: '+1-415-555-2425',
    email: 'support@consultingexperts.com',
  },
  {
    customer_id: 28,
    name: 'Entertainment Studios',
    address: '2525 Hollywood Blvd, Los Angeles, CA 90028',
    contact_number: '+1-323-555-2526',
    email: 'contact@entertainmentstudios.com',
  },
  {
    customer_id: 29,
    name: 'Travel Adventures Inc.',
    address: '2626 Explorer Rd, Orlando, FL 32801',
    contact_number: '+1-407-555-2627',
    email: 'info@traveladventures.com',
  },
  {
    customer_id: 30,
    name: 'Food Services Group',
    address: '2727 Chef St, New Orleans, LA 70112',
    contact_number: '+1-504-555-2728',
    email: 'support@foodservices.com',
  },
];

export interface Customer {
  customer_id: number;
  name: string;
  address: string;
  contact_number: string;
  email: string;
}

export interface ApiResponse<T> {
  status: number;
  error?: string;
  data: T;
}

export function getCustomers(customerName: string): Promise<ApiResponse<Customer[]>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        data:
          customerName === ''
            ? []
            : CUSTOMERS.filter((customer) => customer.name.includes(customerName)),
      });
    }, 1000);
  });
}
