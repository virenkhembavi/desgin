import React from 'react'

export default function Dashboard() {
    return (
        <div className='dashboard-section'>
            <div>
                <h2 className='text-2xl font-bold text-foreground mb-4'>
                    Dashboard
                </h2>
                <div className='row mt-3'>
                    <div class="col-lg-8 col-md-12 col-sm-12 p-0 initail-cards">
                        <div className='row w-100'>
                            <div className='col-lg-3 col-md-6 cards'>
                                <div class="bg-card p-2 rounded-1 shadow-md">
                                    <div class="items-center">
                                        <img aria-hidden="true" alt="shopping-cart" src="./cart.png" class=" image-cards" />
                                        <span class="text-foreground">Total Orders</span>
                                    </div>
                                    <div class="mt-2 d-flex justify-content-between align-items-center">
                                        <span class="text-3xl font-bold text-foreground">75</span>
                                        <span class="text-green-500 ml-2">▲ 3%</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 cards'>
                                <div class="bg-card p-2 rounded-1 shadow-md">
                                    <div class="items-center">
                                        <img aria-hidden="true" alt="shopping-cart" src="./deliver.png" class="image-cards" />
                                        <span class="text-foreground">Total Delivered</span>
                                    </div>
                                    <div class="mt-2 d-flex justify-content-between align-items-center">
                                        <span class="text-3xl font-bold text-foreground">70</span>
                                        <span class="text-red-500 ml-2">▼ 3%</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 cards'>
                                <div class="bg-card p-2 rounded-1 shadow-md">
                                    <div class="items-center">
                                        <img aria-hidden="true" alt="shopping-cart" src="./cancel.png" class="image-cards" />
                                        <span class="text-foreground">Total Cancelled</span>
                                    </div>
                                    <div class="mt-2 d-flex justify-content-between align-items-center">
                                        <span class="text-3xl font-bold text-foreground">05</span>
                                        <span class="text-green-500 ml-2">▲ 3%</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 cards'>
                                <div class="bg-card p-2 rounded-1 shadow-md">
                                    <div class="items-center">
                                        <img aria-hidden="true" alt="shopping-cart" src="./revenue.png" class="image-cards" />
                                        <span class="text-foreground">Total Revenue</span>
                                    </div>
                                    <div class="mt-2 d-flex justify-content-between align-items-center">
                                        <span class="text-3xl font-bold text-foreground">$12k</span>
                                        <span class="text-red-500 ml-2">▼ 3%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12 p-0">
                        <div className='row'>
                            <div className='col-12 p-0'>
                                <div class="bg-card p-4 rounded-lg shadow-md row">
                                    <div class="flex flex-column col-sm-8">
                                        <span style={{ fontSize: "12px" }}>new profit</span>
                                        <span class="text-foreground" style={{ fontSize: "40px", fontWeight: "500" }}>$6759.25</span>
                                        <span class="text-green-500 ml-2">▲ 3%</span>
                                    </div>
                                    <div className='col-sm-4 d-flex justify-content-center align-items-center'>
                                        <img aria-hidden="true" alt="shopping-cart" src="./pie.png" class="image-pie" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-lg-8 col-md-12 col-sm-12 initail-cards'>
                        <img src='./bar-graph.png' alt='graph' className='w-100 object-fit-contain bg-card rounded-1 shadow-md p-3' />
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12 col bg-card rounded-1 shadow-md '>
                        <div className='col p-5 d-flex justify-content-center flex-column gap-5'>
                            <div className='row-sm-3 d-flex justify-content-between align-items-center'>
                                <div className='d-flex justify-content-evenly align-items-center'>
                                    <img src='./goal.png' alt='graph' className='w-70 h-70' />
                                    <span>Goals</span>
                                </div>
                                <img src='./arrow.png' alt='graph' className='object-fit-contain' />
                            </div>
                            <div className='row-sm-5 d-flex justify-content-between align-items-center'>
                                <div className='d-flex justify-content-evenly align-items-center'>
                                    <img src='./dishes.png' alt='graph' className='w-25 h-25' />
                                    <span>Popular Dishes</span>
                                </div>
                                <img src='./arrow.png' alt='graph' className='object-fit-contain' />
                            </div>
                            <div className='row-sm-4 d-flex justify-content-between align-items-center'>
                                <div className='d-flex justify-content-evenly align-items-center'>
                                    <img src='./menu.png' alt='graph' className='w-25 h-25' />
                                    <span>Menus</span>
                                </div>
                                <img src='./arrow.png' alt='graph' className='object-fit-contain' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-lg-8 col-md-12 col-sm-12 initail-cards'>
                        <h3 text-2xl font-bold text-foreground mb-4>Recent Orders</h3>
                        <div className='bg-card rounded-1 shadow-md p-3'>
                            <div class="overflow-x-auto">
                                <table class="min-w-full bg-card text-left text-sm text-muted-foreground">
                                    <thead class="bg-background">
                                        <tr>
                                            <th class="px-4 py-2 border-b border-border">Customer</th>
                                            <th class="px-4 py-2 border-b border-border">Order No.</th>
                                            <th class="px-4 py-2 border-b border-border">Amount</th>
                                            <th class="px-4 py-2 border-b border-border">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-card-foreground border-b border-border">
                                            <td class="px-4 py-2">Wade Warren</td>
                                            <td class="px-4 py-2">15478256</td>
                                            <td class="px-4 py-2">$124.00</td>
                                            <td class="px-4 py-2"><span class="bg-green-500 text-white px-2 py-1 rounded">Delivered</span></td>
                                        </tr>
                                        <tr class="bg-card-foreground border-b border-border">
                                            <td class="px-4 py-2">Jane Cooper</td>
                                            <td class="px-4 py-2">48965786</td>
                                            <td class="px-4 py-2">$365.02</td>
                                            <td class="px-4 py-2"><span class="bg-green-500 text-white px-2 py-1 rounded">Delivered</span></td>
                                        </tr>
                                        <tr class="bg-card-foreground border-b border-border">
                                            <td class="px-4 py-2">Guy Hawkins</td>
                                            <td class="px-4 py-2">78958215</td>
                                            <td class="px-4 py-2">$45.88</td>
                                            <td class="px-4 py-2"><span class="bg-red-500 text-white px-2 py-1 rounded">Cancelled</span></td>
                                        </tr>
                                        <tr class="bg-card-foreground border-b border-border">
                                            <td class="px-4 py-2">Kristin Watson</td>
                                            <td class="px-4 py-2">20965732</td>
                                            <td class="px-4 py-2">$65.00</td>
                                            <td class="px-4 py-2"><span class="bg-yellow-500 text-white px-2 py-1 rounded">Pending</span></td>
                                        </tr>
                                        <tr class="bg-card-foreground border-b border-border">
                                            <td class="px-4 py-2">Cody Fisher</td>
                                            <td class="px-4 py-2">95715620</td>
                                            <td class="px-4 py-2">$545.00</td>
                                            <td class="px-4 py-2"><span class="bg-green-500 text-white px-2 py-1 rounded">Delivered</span></td>
                                        </tr>
                                        <tr class="bg-card-foreground border-b border-border">
                                            <td class="px-4 py-2">Savannah Nguyen</td>
                                            <td class="px-4 py-2">78514568</td>
                                            <td class="px-4 py-2">$128.20</td>
                                            <td class="px-4 py-2"><span class="bg-green-500 text-white px-2 py-1 rounded">Delivered</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12 scroll-section p-1'>
                        <h2 class="text-2xl text-foreground mb-4">Customer's Feedback</h2>
                        <div class="bg-card p-3 rounded-lg shadow-md">
                            <div class="mb-6">
                                <div class="flex items-center mb-2">
                                    <img aria-hidden="true" alt="user-avatar" src="https://openui.fly.dev/openui/24x24.svg?text=👤" class="w-8 h-8 rounded-full mr-2" />
                                    <span class="font-semibold text-primary">Jenny Wilson</span>
                                </div>
                                <div class="flex mb-1">
                                    <span class="text-yellow-400">⭐⭐⭐⭐⭐</span>
                                </div>
                                <p class="text-muted-foreground">
                                    The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very
                                    conscientious about gluten allergies.
                                </p>
                            </div>
                            <div class="mb-6">
                                <div class="flex items-center mb-2">
                                    <img aria-hidden="true" alt="user-avatar" src="https://openui.fly.dev/openui/24x24.svg?text=👤" class="w-8 h-8 rounded-full mr-2" />
                                    <span class="font-semibold text-primary">Dianne Russell</span>
                                </div>
                                <div class="flex mb-1">
                                    <span class="text-yellow-400">⭐⭐⭐⭐⭐</span>
                                </div>
                                <p class="text-muted-foreground">We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.</p>
                            </div>
                            <div>
                                <div class="flex items-center mb-2">
                                    <img aria-hidden="true" alt="user-avatar" src="https://openui.fly.dev/openui/24x24.svg?text=👤" class="w-8 h-8 rounded-full mr-2" />
                                    <span class="font-semibold text-primary">Devon Lane</span>
                                </div>
                                <div class="flex mb-1">
                                    <span class="text-yellow-400">⭐⭐⭐⭐</span>
                                </div>
                                <p class="text-muted-foreground">Normally wines are wines, but theirs are lean, meaty and tender.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}
